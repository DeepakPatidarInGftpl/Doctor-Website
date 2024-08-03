import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, of, Subject, switchMap, takeUntil } from 'rxjs';
import { NotificationService } from 'src/app/Services/notification/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  totalNotificationCount: number = 0;
  notificationList: any;
  page: number = 1;
  itemsPerPage: number = 10;
  notificationIds: any = [];
  private notificationIdsSubject = new BehaviorSubject<number[]>([]);
  private destroy$ = new Subject<void>();

  constructor(private notificationService: NotificationService) {
    this.notificationIdsSubject.pipe(
      debounceTime(3000),
      switchMap(ids => {
        if (ids.length > 0) {
          let formData = new FormData();
          formData.append('notification_id', JSON.stringify(ids));
          return this.notificationService.updateNotificationPanelByIds(formData).pipe(
            catchError(error => {
              console.error('API call failed', error);
              this.notificationIds = [];
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        console.log('API response', res);
        this.getNotificationList(this.page);
        this.notificationIds = [];
      }
    });
   }

  ngOnInit(): void {
    this.getNotificationList(this.page);
  }

  calculateMinutesAgo(scheduleTime: string): number {
    const scheduleDate = new Date(scheduleTime);
    const currentDate = new Date();
    const diffMs = currentDate.getTime() - scheduleDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    return diffMins;
  }

  getNotificationList(page) {
    this.notificationService.getNotificationPanel(page).subscribe((res) => {
      this.itemsPerPage = res?.notifications?.length;
      this.totalNotificationCount = res?.notifications_count;
      console.log(res);
      this.notificationList = res.notifications.map(notification => {
        return {
          ...notification,
          minutesAgo: this.calculateMinutesAgo(notification?.schedule_time)
        };
      });
        console.log(this.notificationList);
    });
  }

  notificationRead(id: number) {
    if (!this.notificationIds.includes(id)) {
      this.notificationIds.push(id);
      this.notificationIdsSubject.next(this.notificationIds);
    }
  }

  pageChange(newPage: number): void {
    if (newPage !== this.page) {
      this.page = newPage;
      this.getNotificationList(this.page);
    }
  }

  getPageNumbers(): (number | string)[] {
    const totalPages = this.totalNotificationCount;
    const currentPage = this.page;
    const maxVisiblePages = 5;
    let startPage: number, endPage: number;
  
    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxVisiblePages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
  
    const pages:any = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    if (startPage > 1) {
      pages.unshift('...');
      pages.unshift(1);
    }
  
    if (endPage < totalPages - 1) {
      pages.push('...');
    } else if (endPage === totalPages - 1) {
      pages.push('...');
    }
    return pages;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
