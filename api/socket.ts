import { io } from 'socket.io-client';

const baseURL = process.env.EXPO_PUBLIC_API_URL as string;
const socket = io(baseURL);

socket.on('connect', () => {
  console.log('Successfully connected!');
});
export default socket;
