import { AdminLayout } from "@/components/layout/admin/admin-layout"

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to your admin dashboard</p>
      </div>
    </AdminLayout>
  )
}