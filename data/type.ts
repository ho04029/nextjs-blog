//글 목록
export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
}

//블로그포스트 상세내용
export interface PostContent extends BlogPost {
  contentHtml: string
}
