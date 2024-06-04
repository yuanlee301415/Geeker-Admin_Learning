/*
* 接口请求
* */

// 用户
declare namespace User {
  interface Info {
    id: string;
    username: string;
    password: string;
  }

  interface DepartmentRes {
    id: number;
    name: string;
    children: DepartmentRes[];
  }
}

// 登录
declare namespace Login {
  export interface Params {
    username: string;
    password: string;
  }
}
