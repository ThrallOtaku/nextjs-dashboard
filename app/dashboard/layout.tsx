import SideNav from '@/app/ui/dashboard/sidenav';
 

//todo 这里的children 是谁
//layout 不变，只有customer 和invoice部分会变。dashboard/layout是侧边栏
//invoice 和customer 是内容部分
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}