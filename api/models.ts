export type User = {
  id: string;
  username: string;
  role: string;
  establishmentId: string;
};

export type Order = {
  id: string;
  customerName: string;
  items?: Item[];
  status: string;
  timestamp: string;
  establishmentId: string;
};

export type Item = {
  id: string;
  naem: string;
  quantity: number;
  orderId: string;
};
