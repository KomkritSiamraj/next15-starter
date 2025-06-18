import { http, HttpResponse } from 'msw';

// Mock user data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
  },
  {
    id: '2',
    username: 'user',
    password: 'user123',
    email: 'user@example.com',
  },
];

interface LoginRequest {
  username: string;
  password: string;
}

export const handlers = [
  // Login handler
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json() as LoginRequest;
    const { username, password } = body;

    // ค้นหา user จาก mock data
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return new HttpResponse(
        JSON.stringify({
          message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // สร้าง mock token
    const token = `mock-jwt-token-${user.id}`;

    return new HttpResponse(
      JSON.stringify({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }),
]; 