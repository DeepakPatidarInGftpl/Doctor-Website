import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
mostpopular : any[] = [];
MostRecent : any[] = [];
  ngOnInit(): void {
    this.mostpopular=[
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2023/05/iStock-1142647245-scaled.jpg',
        title  : 'Master Your Assessment of Athletic Low Back Pain'
      },
      
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2022/08/iStock-1226189541-scaled.jpg',
        title  : 'Manage Plantar Fasciitis'
      },
      
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2023/06/iStock-478216480-scaled.jpg',
        title  : 'Beyond Surgery: The Growing Evidence for Non- Surgical Approaches to ACL Injuries'
      },

    ];
    this.MostRecent = [
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2024/02/iStock-1356833036-scaled.jpg',
        title : 'High-stakes performance: Mastering physio management of tactical personnel'
      },
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2024/02/iStock-1171683752-scaled.jpg',
        title : 'Running-related injuries: Insights into key risk factors'
      },
      {
        img : 'https://cdn.shortpixel.ai/spai/w_1920+q_lossy+ret_img+to_webp/www.physio-network.com/wp-content/uploads/2024/01/iStock-1501185766-scaled.jpg',
        title : 'The balancing act'
      },
    ]
  }
}
