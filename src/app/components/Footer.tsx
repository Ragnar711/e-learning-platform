import React from "react";

const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="mt-4 lg:mt-0">
                    <p>
                        &copy; {new Date().getFullYear()} منصة التعلم الإلكتروني
                    </p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white px-4">
                        تواصل معنا
                    </a>
                    <a href="#" className="hover:text-white px-4">
                        من نحن
                    </a>
                    <a href="#" className="hover:text-white px-4">
                        الصفحة الرئيسية
                    </a>
                </div>
                <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl font-bold">
                        منصة التعلم الإلكتروني
                    </h2>
                    <p className="mt-2">تعلم افضل لشباب المستقبل</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
