export default function Projects() {
  const experiences = [
    {
      year: "2025 / 2568",
      projects: [
        {
          title: "ช่อง CodeWai / โค้ดไว",
          location: "Tiktok / Social Media",
          description:
            "สร้างและเผยแพร่คอนเทนต์เกี่ยวกับการเขียนโค้ด ให้ผู้เรียนสามารถเข้าใจและนำไปประยุกต์ใช้ได้จริงแบบสั้น ๆ",
          tech: ["Content Creation", "Video Editing", "Programming Tutorials"],
        },
      ],
    },
    {
      year: "2024 / 2567",
      projects: [
        {
          title: "ระบบรับสมัครนักเรียน / นักศึกษา",
          location: "DBT Maesod Admission",
          description:
            "พัฒนาระบบรับสมัครออนไลน์ ครอบคลุมการจัดการข้อมูลผู้สมัคร และระบบหลังบ้านสำหรับอาจารย์ ผลงานเผยแพร่อย่างเป็นทางการ ทำให้ได้เรียนรู้และพัฒนาทักษะการทำงานเป็นทีม การจัดการโครงการ และการแก้ไขปัญหาต่างๆ ที่เกิดขึ้นระหว่างการพัฒนา",
          tech: ["PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "ระบบจัดการนิเทศการฝึกงาน",
          location: "CVM Maesod",
          description:
            "ออกแบบและพัฒนาระบบนิเทศการฝึกงานของนักศึกษา ระบบข่าวสาร และระบบรับสมัครนักศึกษาใหม่ ผลงานได้รับการเผยแพร่และใช้งานจริง",
          tech: ["PHP", "MySQL"],
        },
        {
          title: "ระบบจัดการหลังบ้านร้านค้าออนไลน์",
          location: "ร้านค้าออนไลน์",
          description:
            "พัฒนาระบบจัดการหลังบ้าน ครอบคลุมการจัดการภาษี ใบเสนอราคา ใบกำกับภาษี และเอกสารทางการเงิน สามารถคำนวณภาษีมูลค่าเพิ่ม จัดการสต็อกสินค้า และออกรายงานสรุปยอดขาย",
          tech: ["PHP", "MySQL", "JavaScript"],
        },
      ],
    },
    {
      year: "2023 / 2566",
      projects: [
        {
          title: "ฝึกงานที่โรงพยาบาลแม่สอด",
          location: "Maesod Hospital",
          description:
            "พัฒนาระบบภายในหลายส่วน เช่น ระบบซ่อมบำรุง ระบบยื่นขอเอกสาร ระบบยืม-คืนอุปกรณ์ และระบบจัดการเลขครุภัณฑ์ เพื่อเพิ่มประสิทธิภาพและติดตามงานอย่างเป็นระบบ",
          tech: ["PHP", "MySQL", "JavaScript"],
        },
        {
          title: "ออกแบบหน้าเว็บไซต์ข้อมูลข่าวสาร",
          location: "Maesod Technical College",
          description:
            "ร่วมพัฒนาเว็บไซต์ ให้ความสำคัญด้านการออกแบบ UI และ UX ผลงานเผยแพร่อย่างเป็นทางการ",
          tech: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "ระบบจัดการการรับสมัครนักเรียน / นักศึกษา",
          location: "โปรเจ็คจบ ปวช.3",
          description:
            "ระบบจัดการการรับสมัครนักเรียน ใช้ PHP, MySQL, Bootstrap 5 ฟีเจอร์ระบบสมาชิก, อัพโหลดไฟล์, แจ้งเตือน และหน้าแสดงผลข้อมูล",
          tech: ["PHP", "MySQL", "Bootstrap"],
        },
        {
          title: "ระบบรวบรวมโปรเจ็คนักศึกษาและประเมินผล",
          location: "สาขาคอมพิวเตอร์ธุรกิจ",
          description:
            "รวบรวมและจัดแสดงผลงานโปรเจ็คของนักศึกษา ช่วยให้สามารถนำเสนอผลงานอย่างเป็นระบบ และเป็นแหล่งความรู้สำหรับรุ่นน้อง",
          tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        },
      ],
    },
    {
      year: "2022 / 2565",
      projects: [
        {
          title: "Home Care System",
          location: "ร่วมมือกับโรงพยาบาลแม่สอด",
          description:
            "ระบบติดตามผู้ป่วยโควิด-19 ที่รักษาตัวที่บ้าน (Home Isolation) ประมวลผลและแบ่งระดับความรุนแรงของโรค 3 ระดับ เชื่อม LINE Official Account เพื่อแจ้งนัดหมายและติดตามอาการ",
          tech: ["PHP", "MySQL", "JavaScript"],
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-16 animate__animated animate__fadeInDown">
          Experience & Projects
        </h2>

        {experiences.map((yearItem, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-600 mb-8 animate__animated animate__fadeInLeft">
              {yearItem.year}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {yearItem.projects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1 animate__animated animate__fadeInUp"
                >
                  <h4 className="text-2xl font-semibold text-gray-800 mb-1">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-gray-500">{proj.location}</p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
