import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // ในกรณีจริง เราอาจจะต้องทำการ invalidate token หรือ clear session
    // แต่สำหรับ mock API เราจะแค่ return success response
    
    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    );
  }
} 