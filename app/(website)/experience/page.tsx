import PageContainer from '@/components/containers/page-container';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

export default function ExperiencePage() {
  const data = [
    {
      title: "2023 — NOW",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Senior Frontend Developer</h2>
          <div>
            <p className='leading-none font-semibold'>Pusat Gadai Indonesia</p>
            <p className='text-sm'>APRIL 2023 — PRESENT</p>
          </div>
          <div className='mt-4 space-y-2'>
            <div className='my-4'>
              <div>
                <h2 className='text-xl md:text-2xl'> - HRIS (Human Resource Information System)</h2>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Employee Data - Stores and manages employee information such as identity, position, and work history.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Payroll & Compensation - Automates salary calculations, taxes, benefits, and deductions.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Attendance & Time Tracking - Monitors working hours, leaves, and overtime in real-time.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Recruitment Management - Assists in hiring, screening, and onboarding new employees.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Training & Development - Manages employee training programs and skill enhancement.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Performance Evaluation - Facilitates performance reviews and feedback from managers.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Integration with Other Systems - Connects with accounting, finance, or other management software.
                </div>
              </div>
            </div>
            <div className='my-4'>
              <div>
                <h2 className='text-xl md:text-2xl'> - Inventory Management</h2>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Procurement Management - Tracks and manages the purchasing of raw materials or goods.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Stock Monitoring - Monitors inventory levels to prevent overstocking or shortages.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Order Management - Handles order processing, fulfillment, and tracking.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Supplier Management - Maintains relationships and transactions with vendors and suppliers.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Warehouse Management - Organizes storage, categorization, and retrieval of inventory.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Asset Management - Tracks company assets, including equipment and fixed resources.
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Reporting & Analytics - Provides data insights for optimizing stock levels and business decisions.
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>VueJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>NuxtJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>TailwindCSS</div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 — 2023",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Fullstack Developer</h2>
          <div>
            <p className='leading-none font-semibold'>PT Sintesa Prima Indonesia</p>
            <p className='text-sm'>SEPTEMBER 2022 — MARCH 20223</p>
          </div>
          <p>
            Leading a team Building a multi-vendor E-commerce platform, Designing business
            flow, Designing System Architecture, database design.
          </p>
          <div className='mt-4 space-y-2'>
            <div className='my-4'>
              <div>
                <h2 className='text-xl md:text-2xl'> - Backend</h2>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Setup Project & Framework
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Database Design & Models
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop Authentication & Authorization
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop Product Management API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop User & Cart API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Order & Checkout API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Integrate Shipping & Tracking API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Integrate Payment Gateway
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Create API Documentation
                </div>
              </div>
            </div>
            <div className='my-4'>
              <div>
                <h2 className='text-xl md:text-2xl'> - Frontend</h2>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Project Initialization
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Folder Structure & Routing
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ UI/UX Design Implementation
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Setup State Management
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Authentication & Authorization
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Product & Category Pages
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Shopping Cart & Checkout
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ User Dashboard
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ API Integration
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Performance Optimization
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>Laravel</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>ExpressJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>MySQL</div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 — 2022",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Backend Developer</h2>
          <div>
            <p className='leading-none font-semibold'>PT Atlaz Belajar Bahasa</p>
            <p className='text-sm'>MARCH 2021 — SEPTEMBER 2022</p>
          </div>
          <div className='mt-4 space-y-2'>
            <p>
              Build a digital online learning system platform, implement database design and build RestAPI
            </p>
            <div className='my-4'>
              <div>
                <h2 className='text-xl md:text-2xl'> - Backend</h2>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Setup Project & Framework
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Database Design & Models
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop Authentication & Authorization
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop Book Management API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop User And Student API
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Develop Statistic Data For Admin Panel
                </div>
                <div className="flex gap-2 items-center text-sm md:text-base">
                  ✅ Create API Documentation
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>NodeJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>ExpressJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>MongoDB</div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 — 2020",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Fullstack Developer</h2>
          <div>
            <p className='leading-none font-semibold'>At: PT Rimerup Indonesia Sukses</p>
            <p>Period: FEBRUARY 2019 — FEBRUARY 2020</p>
          </div>
          <div className='mt-4 space-y-2'>
            <p>
              Employee Report & E-Commerce Platform
            </p>
            <div className='mt-4 space-y-2'>
              <div className='my-4'>
                <div>
                  <h2 className='text-xl md:text-2xl'> - Employee Report</h2>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Setup Project & Framework
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Database Design & Models
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop Authentication & Authorization
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop Employee Management Modul
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop Report Employee Modul
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Create Documentation
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <div>
                  <h2 className='text-xl md:text-2xl'> - E-Commerce Platform</h2>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Setup Project & Framework
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Database Design & Models
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop Authentication & Authorization
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop Product Management
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Develop User & Cart
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Order & Checkout
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Integrate Shipping & Tracking
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Integrate Payment Gateway
                  </div>
                  <div className="flex gap-2 items-center text-sm md:text-base">
                    ✅ Create Documentation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>CodeIgniter3</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>ReactJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>ReactNative</div>
          </div>
        </div>
      ),
    },
    {
      title: "2018 — 2019",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Frontend Developer</h2>
          <div>
            <p className='leading-none font-semibold'>At: PT Kawan Digital Indonesia</p>
            <p>Period: JUNE 2018 — JANUARY 2019</p>
          </div>
          <div className='mt-4'>
            <p>
              Build a digital platform for online learning and school management, Consume API
              / Integrate or communicate data with the Backend, Build an admin panel to control
              and monitor data.
            </p>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>ReactJS</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>Bootstrap</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>CSS3</div>
          </div>
        </div>
      ),
    },
    {
      title: "2017-2018",
      content: (
        <div>
          <h2 className='text-2xl md:text-4xl'>Junior Programmer</h2>
          <div>
            <p className='leading-none font-semibold'>At: PT Dolphine Technology</p>
            <p>Period: JANUARY 2017 — DECEMBER 2018</p>
          </div>
          <p className='text-base text-slate-300'>
            Helping seniors Building web applications for internal companies, such as inventory and company profile websites
          </p>
          <div className='mt-4 space-y-2'>
            <div className="flex gap-2 items-center text-sm md:text-base">
              ✅ Writing, testing, and debugging code under senior developer guidance.
            </div>
            <div className="flex gap-2 items-center text-sm md:text-base">
              ✅ Implementing basic website features using frontend and/or backend technologies.
            </div>
            <div className="flex gap-2 items-center text-sm md:text-base">
              ✅ Collaborating with the development team to ensure smooth project execution.
            </div>
            <div className="flex gap-2 items-center text-sm md:text-base">
              ✅ Learning best coding practices and improving technical skills.
            </div>
            <div className="flex gap-2 items-center text-sm md:text-base">
              ✅ Using GitHub for version control and project management.
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>PHP</div>
            <div className='px-2 py-1 border border-myprimary-superlight/20 text-sm font-bold text-myprimary-superlight'>MYSQL</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <PageContainer title='Experience' subtitle='My experience in working in a company'>
      <div className="bg-slate-900/50 h-full relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 z-0">
          <Image className='z-0 opacity-5 object-cover' fill alt='ETH' src={'/images/skills/bg-buble.png'} />
        </div>
        <div className="container relative z-10 backdrop-blur">
          <div className="w-full">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
