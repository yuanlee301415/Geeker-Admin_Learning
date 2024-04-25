declare namespace User {
  interface DepartmentRes {
    id: number;
    name: string;
    children: DepartmentRes[];
  }
}
