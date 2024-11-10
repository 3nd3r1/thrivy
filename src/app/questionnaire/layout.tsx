const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg mt-[5em]">
            {children}
        </div>
    </main>
    </>
);

export default Layout;
