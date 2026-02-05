 import { useState } from "react";
 import { Label } from "@/components/ui/label";
 import { Input } from "@/components/ui/input";
 import { Checkbox } from "@/components/ui/checkbox";
import { PageHeader } from "@/components/shared/PageHeader";
 import { Search, Filter, TicketCheck } from "lucide-react";
 import { EmptyState } from "@/components/shared/EmptyState";
 
 /**
  * Support Tickets Page
  * DaisyUI: select, input, checkbox, table, btn
  */
 
 export default function SupportTickets() {
   const [filters, setFilters] = useState({
     status: "all",
     priority: "all",
     category: "all",
     agent: "all",
     fromDate: "",
     toDate: "",
     search: "",
     unassigned: false,
     escalated: false,
     slaBreached: false,
   });
 
   return (
     <div className="space-y-6">
       {/* Header */}
      <PageHeader
        title="Support Tickets"
        subtitle="Manage customer support tickets"
         backLink="/support"
         backLabel="Support"
      />
 
       {/* Filters Card - Compact */}
       <div className="rounded-xl border border-border bg-card card-shadow">
         <div className="p-4">
           <div className="flex flex-wrap items-end gap-3">
             {/* Search */}
             <div className="flex-1 min-w-[200px] max-w-sm relative">
               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
               <Input
                 placeholder="Search tickets..."
                 value={filters.search}
                 onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                 className="pl-9 h-9"
               />
             </div>

             {/* Status */}
             <select
               value={filters.status}
               onChange={(e) => setFilters({ ...filters, status: e.target.value })}
               className="h-9 px-3 rounded-md border border-input bg-background text-foreground text-sm"
             >
               <option value="all">All Statuses</option>
               <option value="open">Open</option>
               <option value="pending">Pending</option>
               <option value="resolved">Resolved</option>
               <option value="closed">Closed</option>
             </select>

             {/* Priority */}
             <select
               value={filters.priority}
               onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
               className="h-9 px-3 rounded-md border border-input bg-background text-foreground text-sm"
             >
               <option value="all">All Priorities</option>
               <option value="low">Low</option>
               <option value="medium">Medium</option>
               <option value="high">High</option>
               <option value="urgent">Urgent</option>
             </select>

             {/* Category */}
             <select
               value={filters.category}
               onChange={(e) => setFilters({ ...filters, category: e.target.value })}
               className="h-9 px-3 rounded-md border border-input bg-background text-foreground text-sm"
             >
               <option value="all">All Categories</option>
               <option value="order">Order Issues</option>
               <option value="payment">Payment</option>
               <option value="delivery">Delivery</option>
               <option value="general">General</option>
             </select>

             {/* Agent */}
             <select
               value={filters.agent}
               onChange={(e) => setFilters({ ...filters, agent: e.target.value })}
               className="h-9 px-3 rounded-md border border-input bg-background text-foreground text-sm"
             >
               <option value="all">All Agents</option>
             </select>

             {/* Date Range */}
             <Input
               type="date"
               value={filters.fromDate}
               onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
               className="h-9 w-32"
             />
             <span className="text-muted-foreground text-sm">to</span>
             <Input
               type="date"
               value={filters.toDate}
               onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
               className="h-9 w-32"
             />

             {/* Checkboxes */}
             <label className="flex items-center gap-1.5 text-sm cursor-pointer">
               <Checkbox
                 checked={filters.unassigned}
                 onCheckedChange={(checked) => setFilters({ ...filters, unassigned: checked === true })}
               />
               <span className="text-muted-foreground">Unassigned</span>
             </label>
             <label className="flex items-center gap-1.5 text-sm cursor-pointer">
               <Checkbox
                 checked={filters.escalated}
                 onCheckedChange={(checked) => setFilters({ ...filters, escalated: checked === true })}
               />
               <span className="text-muted-foreground">Escalated</span>
             </label>
             <label className="flex items-center gap-1.5 text-sm cursor-pointer">
               <Checkbox
                 checked={filters.slaBreached}
                 onCheckedChange={(checked) => setFilters({ ...filters, slaBreached: checked === true })}
               />
               <span className="text-warning">SLA Breached</span>
             </label>

             <button className="btn-primary btn-sm px-4 h-9">
               <Filter className="h-4 w-4 mr-1" />
               Filter
             </button>
           </div>
         </div>
       </div>
 
       {/* Tickets Table */}
    <div className="rounded-xl border border-border bg-card card-shadow overflow-hidden">
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead>
            <tr className="bg-muted/30 border-b border-border">
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ticket</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Order</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Priority</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent</th>
                 <th className="px-4 py-3.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={9} className="px-4 py-16">
                   <EmptyState
                     icon={TicketCheck}
                     title="No tickets found"
                     description="Try adjusting your filters or search criteria"
                   />
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </div>
     </div>
   );
 }