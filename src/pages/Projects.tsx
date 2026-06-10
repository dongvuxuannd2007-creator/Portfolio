import { Navbar } from '../components/Navbar';
import { WordsPullUpMultiStyle, WordsPullUp } from '../components/framer';
import { AnimatedBlobs } from '../components/AnimatedBlobs';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ArrowRight, Download, X } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục",
    category: "Thực hành File Explorer",
    desc: "Tổ chức dữ liệu khoa học thông qua các thao tác cơ bản với tệp tin và thư mục trên File Explorer, đáp ứng nguyên tắc quản lý thông tin.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    details: [
      "Thiết lập cấu trúc thư mục logic, có tính phân cấp.",
      "Thực hiện thành thạo tạo, sao chép, di chuyển và xóa.",
      "Làm chủ cơ chế khôi phục dữ liệu từ Recycle Bin."
    ],
    file: "b1.docx",
    fullContent: `I. Mục tiêu thực hành
- Xây dựng tư duy tổ chức dữ liệu khoa học trên môi trường máy tính cá nhân.
- Thành thạo các thao tác quản lý tệp tin và thư mục bằng File Explorer.

II. Quá trình thực hiện
- Tạo cấu trúc phân cấp: Thiết lập thư mục gốc "ThucHanh_DongXuanVu" và thư mục con "TaiLieu" tại ổ đĩa D:.
- Quản lý tệp tin: Tạo mới tệp "GhiChu.txt" và áp dụng các thao tác thiết yếu bao gồm: Đổi tên (Rename), Sao chép (Copy), và Di chuyển (Cut/Paste) vào thư mục đích.
- Quản lý rủi ro dữ liệu: Thực hiện thao tác xóa tệp tin (Delete), xóa vĩnh viễn (Shift + Delete) và khôi phục dữ liệu an toàn từ Thùng rác (Recycle Bin).

III. Kết quả đạt được
- Tối ưu hóa việc lưu trữ, giúp tra cứu và truy xuất dữ liệu nhanh chóng.
- Giảm thiểu rủi ro mất mát thông tin quan trọng trong quá trình học tập và làm việc sau này.`
  },
  {
    id: "02",
    title: "Bài 2 - Bài tập 2 của mục 2.4: Tìm kiếm và đánh giá thông tin học thuật",
    category: "Nghiên cứu & Đánh giá",
    desc: "Sử dụng toán tử tìm kiếm nâng cao và thiết lập ma trận đánh giá độ tin cậy để thẩm định các nguồn tài liệu học thuật.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    details: [
      "Xác định chủ đề nghiên cứu: ML dự đoán bệnh tim.",
      "Tìm kiếm bằng toán tử nâng cao trên Google Scholar.",
      "Phân tích & xếp hạng độ tin cậy >10 nguồn tài liệu."
    ],
    file: "b2.docx",
    fullContent: `I. Chủ đề nghiên cứu
"Ứng dụng Machine Learning trong dự đoán bệnh tim"
- Lý do lựa chọn: Đây là chủ đề mang tính ứng dụng cao, nguồn dữ liệu phong phú, phục vụ trực tiếp cho chuyên ngành Khoa học dữ liệu.

II. Chiến lược tìm kiếm và Phân loại tài liệu
Thu thập tổng cộng >10 tài liệu tham khảo chất lượng, được phân loại thành 3 nhóm:
- Bài báo khoa học quốc tế (≥5 bài): Các tạp chí xếp hạng Q1 như IEEE Access, BMC Medical, Nature (Scientific Reports).
- Sách chuyên khảo: Nền tảng lý thuyết vững chắc (ví dụ: Pattern Recognition and Machine Learning).
- Nguồn dữ liệu Internet uy tín: WHO, UCI Machine Learning Repository, Kaggle.

III. Đánh giá độ tin cậy nguồn tin
Hệ thống đánh giá dựa trên: Tác giả, Nơi xuất bản, Chỉ số trích dẫn và Tính cập nhật.
- Nguồn học thuật (IEEE, Nature, BMC): Độ tin cậy tuyệt đối (5 sao), trải qua quy trình peer-review khắt khe.
- Dữ liệu tổ chức quốc tế (WHO): Độ tin cậy rất cao, dữ liệu chuẩn xác.
- Cộng đồng chia sẻ (Kaggle): Hữu ích cho thực nghiệm nhưng độ tin cậy học thuật thấp hơn (2-3 sao) do không qua kiểm duyệt.

IV. Bài học rút ra
- Kỹ năng đánh giá nguồn tin là yếu tố cốt lõi để đảm bảo chất lượng và tính liêm chính trong các dự án phân tích dữ liệu.`
  },
  {
    id: "03",
    title: "Bài 3 - Bài tập 2 của mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập",
    category: "Prompt Engineering",
    desc: "Áp dụng kỹ thuật Prompt Engineering theo cấp độ để tối ưu hóa khả năng của AI tạo sinh trong giải quyết vấn đề phức tạp.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    details: [
      "Thử nghiệm 3 tác vụ: Tóm tắt, Giải thích, Tạo câu hỏi.",
      "Phân tích sự tiến hóa của Prompt: Cơ bản → Nâng cao.",
      "Áp dụng cấu trúc Role-Task-Format-Context."
    ],
    file: "b3.docx",
    fullContent: `I. Mục tiêu
Làm chủ kỹ năng giao tiếp với AI (Prompt Engineering) để nâng cao hiệu suất học tập và nghiên cứu.

II. Quá trình thực nghiệm
Triển khai 3 tác vụ học tập điển hình qua 3 cấp độ Prompt (Cơ bản - Cải tiến - Nâng cao):
1. Tóm tắt tài liệu học thuật.
2. Giải thích khái niệm phức tạp (ví dụ: Đạo hàm riêng).
3. Thiết kế bộ câu hỏi ôn tập đa mức độ.

III. Phân tích hiệu quả và Kết quả đầu ra
- Prompt cơ bản: Đầu ra chung chung, thiếu chiều sâu.
- Prompt cải tiến: Kết quả rõ ràng hơn nhờ cấu trúc chi tiết.
- Prompt nâng cao (Kết quả xuất sắc): Bằng cách cung cấp Vai trò (Role - ví dụ: "Bạn là chuyên gia AI"), Yêu cầu định dạng (Format) và Ngữ cảnh (Context), AI tạo ra kết quả sắc bén, logic và đạt độ chính xác chuyên môn cao.

IV. Nguyên tắc cốt lõi (Best Practices)
- Cụ thể hóa yêu cầu và chia nhỏ nhiệm vụ phức tạp.
- Thiết lập định dạng đầu ra rõ ràng (Bullet points, Bảng biểu).
- Cung cấp ví dụ mẫu (Few-shot prompting) khi cần.
- Kết luận: Việc làm chủ Prompt Engineering không chỉ tiết kiệm thời gian mà còn nâng tầm tư duy hệ thống.`
  },
  {
    id: "04",
    title: "Bài 4 - Bài tập 3 của mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    category: "Cộng tác Số",
    desc: "Triển khai dự án thuật toán (DFS/BFS) bằng cách phối hợp đồng bộ các công cụ quản lý dự án, thiết kế và giao tiếp trực tuyến.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    details: [
      "Quản lý vòng đời dự án qua Google Docs & Trello.",
      "Trực quan hóa ý tưởng bằng Canva.",
      "Thảo luận và fix bug theo thời gian thực trên Discord."
    ],
    file: "b4.docx",
    fullContent: `I. Bối cảnh dự án
Ứng dụng các công cụ làm việc nhóm trên môi trường số để triển khai dự án môn Cấu trúc dữ liệu: "Cài đặt và phân tích thuật toán duyệt đồ thị DFS & BFS".

II. Mô hình kết hợp công cụ trực tuyến
- Quản lý công việc (Trello / Google Docs): Phân rã dự án thành các thẻ công việc (Tasks), gán nhãn người phụ trách và theo dõi tiến độ (To Do, Doing, Done). Đảm bảo dự án không bị trễ hạn.
- Thiết kế trực quan (Canva): Cùng nhau biên tập slide báo cáo theo thời gian thực, trực quan hóa quá trình duyệt đồ thị (Nodes/Edges) giúp bài thuyết trình sinh động, chuyên nghiệp.
- Giao tiếp và xử lý sự cố (Discord): Tổ chức các phiên họp voice/share màn hình để debug code C++ và giải quyết các điểm nghẽn logic ngay lập tức.

III. Khó khăn & Khắc phục
- Vấn đề: Việc đồng bộ code và gỡ lỗi đệ quy trong DFS gặp nhiều khó khăn, dễ dẫn đến lỗi lặp vô hạn.
- Giải pháp: Nhóm đã sử dụng luồng thảo luận riêng trên Discord kết hợp vẽ sơ đồ trên Canva để tìm ra giải pháp chung nhanh chóng.

IV. Kết luận
- Việc ứng dụng linh hoạt các nền tảng số không chỉ tăng năng suất mà còn xóa bỏ hoàn toàn rào cản địa lý, là kỹ năng bắt buộc cho một kỹ sư dữ liệu tương lai.`
  },
  {
    id: "05",
    title: "Bài 5 - Bài tập 2 của mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    category: "AI Sáng tạo (Generative AI)",
    desc: "Xây dựng Infographic giáo dục khoa học bằng phương pháp kết hợp chuỗi (Pipeline) 3 công cụ AI: Claude, DALL-E 3 và Canva.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop",
    details: [
      "Claude: Xây dựng cấu trúc và nội dung khoa học.",
      "DALL-E 3: Tạo hình ảnh minh họa chất lượng cao.",
      "Canva AI: Lắp ráp layout và tinh chỉnh nghệ thuật."
    ],
    file: "b5.docx",
    fullContent: `I. Tổng quan dự án
Thiết kế Infographic chủ đề: "Hành trình Carbon – Từ Nhà Máy Đến Bầu Khí Quyển" ứng dụng quy trình tuyến tính của Generative AI để giảm 70% thời gian thực thi.

II. Quy trình triển khai chuỗi công cụ (Pipeline)
1. Lên ý tưởng & Viết nội dung (Claude): Yêu cầu Claude đưa ra cấu trúc 6 phần dựa trên báo cáo IPCC. Sau đó, tôi trực tiếp biên tập lại văn phong để phù hợp với đối tượng học sinh THPT, thêm Call-to-action mạnh mẽ.
2. Tạo hình ảnh minh họa (DALL-E 3): Sử dụng Prompt mô tả chi tiết phong cách nghệ thuật ("scientific infographic, modern flat design, teal and coral colors"). Thực hiện 3 lần lặp (iterations) để có tỷ lệ hình ảnh 16:9 và bố cục ưng ý.
3. Thiết kế & Hoàn thiện (Canva AI): Dùng Magic Design để tạo Layout. Tôi tự tay điều chỉnh font chữ, vẽ thêm biểu đồ Gauge Chart hiển thị số liệu CO2 và tinh chỉnh độ bão hòa màu để thống nhất thương hiệu tác phẩm.

III. Phân tích vai trò và Tỷ lệ đóng góp
- Ước tính mức đóng góp: AI hỗ trợ 45% (Tốc độ và cấu trúc thô), Cá nhân đóng góp 55% (Cảm xúc ngôn ngữ, chỉnh sửa màu sắc, định hướng mỹ thuật).
- Đánh giá: AI là công cụ khuếch đại sức mạnh sáng tạo, nhưng chất lượng cuối cùng vẫn phụ thuộc hoàn toàn vào tư duy phê phán và phán đoán thẩm mỹ của con người.`
  },
  {
    id: "06",
    title: "Bài 6 - Bài tập 4 của mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    category: "AI Liêm chính (AI Ethics)",
    desc: "Đánh giá các vấn đề đạo đức, ranh giới gian lận học thuật và thiết lập bộ 6 nguyên tắc cá nhân khi sử dụng AI.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800&auto=format&fit=crop",
    details: [
      "Phân tích chính sách AI của các Đại học hàng đầu.",
      "So sánh 'Hỗ trợ hợp lý' vs 'Ủy thác gian lận'.",
      "Cam kết thực hiện '6 Chuẩn mực Tự thân'."
    ],
    file: "b6.docx",
    fullContent: `I. Nghiên cứu chính sách và Vấn đề đạo đức
- Phân tích sự chuyển dịch từ thái độ "Cấm đoán" sang "Tích hợp có kiểm soát" tại các trường Đại học lớn.
- Nhận diện ranh giới học thuật: Sử dụng AI như một "Gia sư tham vấn" (hợp lệ) thay vì "Ủy thác toàn bộ công việc" (gian lận). Việc copy-paste không đi qua bộ lọc tư duy sẽ tước đoạt cơ hội rèn luyện kỹ năng giải quyết vấn đề.

II. Thực hành AI Liêm chính: Cài đặt Linked List (C++)
- Quá trình: Dùng AI để giải thích sự khác biệt về cơ chế cấp phát bộ nhớ (Pointers trong C++ so với Python).
- Làm chủ công nghệ: AI viết code Raw Pointers dễ gây rò rỉ bộ nhớ. Tôi đã tự chủ động viết lại bằng cấu trúc class hướng đối tượng (OOP) và bổ sung lệnh xóa bộ nhớ (delete). Đây là minh chứng rõ ràng nhất của việc học viên kiểm soát AI.

III. Thiết lập Bộ 6 Nguyên tắc Tự thân (Code of Ethics)
1. Minh bạch (Transparency): Luôn khai báo công cụ AI đã dùng.
2. Kiểm chứng (Verification): Xác minh mọi số liệu và đoạn code AI sinh ra từ nguồn tin cậy.
3. Tư duy độc lập (Critical Thinking): AI chỉ gợi ý, quyết định cuối cùng thuộc về con người.
4. Ưu tiên Học tập (Learning-First): Dùng AI để hiểu bản chất, không dùng để vượt rào bài tập.
5. Bảo mật an toàn (Privacy): Không đưa dữ liệu nhạy cảm cá nhân lên AI công cộng.
6. Tuân thủ (Compliance): Tuân thủ tuyệt đối quy định của Đại học Quốc gia Hà Nội.

IV. Kết luận
Kỹ năng quan trọng nhất trong kỷ nguyên số là "Human Judgment" - khả năng phán đoán, phân tích và tự chịu trách nhiệm về sản phẩm học thuật của chính mình.`
  }
];

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#151515] border border-white/10 w-full max-w-4xl max-h-[85vh] rounded-[2rem] relative shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/10 text-white transition-colors z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-48 md:h-64 w-full shrink-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 md:left-10 right-6 z-10">
            <h3 className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">{project.category}</h3>
            <WordsPullUp 
              text={project.title} 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-3xl"
            />
          </div>
        </div>
        
        {/* Content Body */}
        <div className="p-6 md:p-10 pt-4 flex-1 overflow-y-auto relative">
          <div className="mb-10 space-y-4 relative z-10">
            {project.fullContent.split('\n').map((line: string, i: number) => {
              if (!line.trim()) return null;
              
              const isHeader = line.match(/^[A-Z0-9IV]+\./);
              const isListItem = line.trim().startsWith('-');
              const isSubItem = line.match(/^\d+\./);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.03, duration: 0.4 }}
                >
                  <p className={
                    isHeader 
                      ? "text-[#E1E0CC] font-semibold text-lg md:text-xl mt-8 mb-3" 
                      : isSubItem
                        ? "text-primary font-medium text-[15px] md:text-base mt-4 mb-1 pl-2"
                        : isListItem
                          ? "text-gray-400 text-[15px] md:text-base leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-2 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full"
                          : "text-gray-400 text-[15px] md:text-base leading-relaxed pl-4 border-l-2 border-white/5 mb-2"
                  }>
                    {line.replace(/^- /, '')}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-start relative z-10 mt-8 pt-6 border-t border-white/10"
          >
            <a 
              href={`/${project.file}`} 
              download
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-6 py-3 rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(225,224,204,0.3)]"
            >
              <Download className="w-4 h-4" />
              Tải Báo cáo đính kèm (.docx)
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onOpen }: { project: any, index: number, onOpen: (p: any) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#151515]/80 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer hover:border-primary/50 border border-white/5 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(222,219,200,0.15)] hover:-translate-y-2"
      onClick={() => onOpen(project)}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay pointer-events-none" />
      
      {/* Subtle hover gradient inside card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
      
      <div className="z-10 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
            <img src={project.image} alt="icon" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <span className="text-gray-500 font-serif italic text-xl group-hover:text-primary transition-colors">{project.id}</span>
        </div>

        <h3 className="text-[#E1E0CC] text-xs uppercase tracking-wider mb-2 font-semibold">{project.category}</h3>
        <h2 className="text-lg md:text-xl font-medium text-white mb-4 leading-tight group-hover:text-[#E1E0CC] transition-colors line-clamp-2">{project.title}</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <ul className="space-y-3 mb-8">
          {project.details.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-400 text-xs md:text-sm leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 z-10 relative mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
        <button 
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          className="flex items-center text-sm font-medium text-[#E1E0CC] hover:text-white transition-colors group/btn"
        >
          Xem chi tiết
          <ArrowRight className="w-4 h-4 ml-2 transform -rotate-45 group-hover/btn:rotate-0 group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden pt-24 pb-20 px-4 md:px-8">
      <AnimatedBlobs variant="primary" />
      <Navbar />
      <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <WordsPullUpMultiStyle 
            segments={[
              { text: "Kho lưu trữ", className: "text-gray-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal block mb-2" },
              { text: "dự án cá nhân.", className: "text-[#E1E0CC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal block" }
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={idx} 
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};
