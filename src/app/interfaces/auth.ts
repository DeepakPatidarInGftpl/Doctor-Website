export interface Auth {
    username: string,
    password: string,
    status: undefined | string,
    token: undefined | string,
    user: undefined | string,
    permission: Permission[];
}

export interface Permission {
    id: number;
    content_type: {
      id: number;
      app_label: string;
      model: string;
    };
    name: string;
    codename: string;
  }
