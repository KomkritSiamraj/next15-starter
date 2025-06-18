import { AdminLayout } from "@/components/layout/admin/admin-layout";
import KanbanViewPage from "@/features/kanban/components/kanban-view-page";

export default function TaskKanban(){
    return (
        <AdminLayout>
        <div className="w-full space-y-4">
          <h1 className="text-3xl font-bold">Task Manage</h1>
          <KanbanViewPage/>
        </div>
      </AdminLayout>
    )
}