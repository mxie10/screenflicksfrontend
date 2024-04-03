'use client'

import { Inter } from "next/font/google";
import { FaAlignJustify } from "react-icons/fa";
import useSideBar from './hooks/useSidebar';
import SideBar from "./component/Sidebar";
import NavBar from "./component/NavBar";
import "./globals.css";
import Footer from "./component/Footer";
import LoginModal from "./component/modals/LoginModal";
import RegisterModal from "./component/modals/RegisterModal";
import SearchBar from "./component/SearchBar";

const inter = Inter({ subsets: ["latin"] });

interface LayoutBodyProps {
  children: React.ReactNode
}

const LayoutBody: React.FC<LayoutBodyProps> = ({ children }) => {

  const sidebarModel = useSideBar();

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  const ToggleIcon = () => {
    return (
      <div
        className="
          flex
          flex-row
          gap-3
          p-2
          items-center
        "
      >
        <div
          className="
            cursor-pointer 
            lg:hidden
          "
          onClick={toggleSidebar}
        >
          <FaAlignJustify size={25} />
        </div>
        <SearchBar/>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col relative z-10 min-h-screen bg-neutral-200">
      <LoginModal/>
      <RegisterModal/>
      <ToggleIcon />
      <SideBar />
      <NavBar />
      <div className="">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: '100vh' }}>
        <LayoutBody children={children} />
      </body>
    </html>
  );
}

