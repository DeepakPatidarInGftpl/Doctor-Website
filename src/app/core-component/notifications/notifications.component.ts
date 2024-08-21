import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/Services/notification/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  totalNotificationCount: number = 0;
  notificationList: any;
  page: number = 1;
  itemsPerPage: number = 10;
  notificationIds: any = [];
  notificationVel: any = [];
  selectedNotificationIds = [];
  isAllNotificationView = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.getNotificationList(this.page);
  }

  calculateMinutesAgo(scheduleTime: string): string {
    const scheduleDate = new Date(scheduleTime);
    const currentDate = new Date();
    const diffMs = currentDate.getTime() - scheduleDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else {
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      return scheduleDate.toLocaleDateString('en-US', options);
    }
  }

  getNotificationList(page) {
    this.notificationService.getNotificationPanel(page).subscribe((res) => {
      this.itemsPerPage = res?.notifications?.length;
      this.totalNotificationCount = res?.notifications_count;
      // console.log(res);
      this.notificationList = res.notifications.map((notification) =>notification.minutesAgo = this.calculateMinutesAgo(notification?.schedule_time));
      // console.log(this.notificationList);
      let isAllNotificationView = [];
      this.notificationList.map((val)=> {
        isAllNotificationView.push(val?.is_view);
      })
      this.isAllNotificationView = isAllNotificationView.every(value => value === true);
    });
  }

  chackboxChange(id: number,index : number) {

    if(this.selectedNotificationIds.length === 0){
      this.selectedNotificationIds.push(id);

    }else{
     let val = this.selectedNotificationIds.includes(id);
    val ? this.selectedNotificationIds.splice(index , 1) : this.selectedNotificationIds.push(id)


    }

  }

  selectedNotification() {
    let formData = new FormData();
    formData.append(
      'notification_id',
      JSON.stringify(this.selectedNotificationIds)
    );
    this.notificationService.updateNotificationPanelByIds(formData).subscribe(
      (res) => {
        this.getNotificationList(this.page);
        this.selectedNotificationIds = [];
      },
      (err) => {
        this.selectedNotificationIds = [];
      }
    );
  }

  viewAllNotification() {
    this.notificationService.viewAllNotification().subscribe((res) => {
      this.getNotificationList(this.page);
    })
  }

  notificationRead(id: number, isView: boolean) {
    if (!isView) {
      if (!this.notificationIds.includes(id)) {
        this.notificationIds.push(id);
        let formData = new FormData();
        formData.append(
          'notification_id',
          JSON.stringify(this.notificationIds)
        );
        this.notificationService
          .updateNotificationPanelByIds(formData)
          .subscribe(
            (res) => {
              this.getNotificationList(this.page);
              this.notificationIds = [];
            },
            (err) => {
              this.notificationIds = [];
            }
          );
      }
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

    const pages: any = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );
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
}
