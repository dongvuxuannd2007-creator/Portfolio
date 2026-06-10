import { Navbar } from '../components/Navbar';
import { WordsPullUp, ScrollTextReveal } from '../components/framer';
import { AnimatedBlobs } from '../components/AnimatedBlobs';
import { Check, Star, Target, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

export const Summary = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden pt-24 pb-20 px-6 md:px-12">
      <AnimatedBlobs variant="secondary" />
      <Navbar />
      <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <WordsPullUp 
            text="Tổng kết hành trình." 
            className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
          />
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#151515]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(222,219,200,0.1)] hover:-translate-y-1 p-8 md:p-12 rounded-2xl md:rounded-[2rem] group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Star className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-medium text-white group-hover:text-[#E1E0CC] transition-colors">Trải nghiệm & Cảm nhận</h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Dự án Portfolio môn "Nhập môn công nghệ số" là một trải nghiệm thay đổi tư duy sâu sắc. Quá trình không chỉ giúp tôi ứng dụng thực tế các công cụ AI tạo sinh như Claude, DALL-E, hay Canva, mà còn thay đổi cách tôi tiếp cận việc học tập. Thay vì thụ động nhận thông tin, tôi học được cách đặt câu hỏi đúng (prompt engineering) và kiểm chứng độc lập.
            </p>
            <ScrollTextReveal 
              text="Đặc biệt, việc tự tay xây dựng các chuẩn mực đạo đức cá nhân giúp tôi tự tin hơn khi ứng dụng AI vào chuyên ngành Khoa học dữ liệu của mình."
              className="text-[#E1E0CC] text-base md:text-lg italic"
            />
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#151515]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(222,219,200,0.1)] hover:-translate-y-1 p-8 md:p-12 rounded-2xl md:rounded-[2rem] group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-medium text-white group-hover:text-[#E1E0CC] transition-colors">Kiến thức & Kỹ năng cốt lõi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Kỹ năng tìm kiếm và đánh giá nguồn tài liệu học thuật uy tín.",
                "Kỹ thuật viết Prompt hiệu quả theo cấu trúc Role-Task-Format.",
                "Tích hợp các công cụ AI tạo sinh (Text, Image, Design) tuyến tính.",
                "Sử dụng công cụ cộng tác trực tuyến (Trello, Discord) hiệu quả.",
                "Nhận thức rõ ràng về an toàn và liêm chính học thuật."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#151515]/80 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(222,219,200,0.1)] hover:-translate-y-1 p-8 md:p-12 rounded-2xl md:rounded-[2rem] group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Flag className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-medium text-white group-hover:text-[#E1E0CC] transition-colors">Thách thức & Điểm tâm đắc</h2>
            </div>
            <div className="space-y-6">
              <div className="group/inner hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors">
                <h3 className="text-[#E1E0CC] font-medium mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  Thách thức lớn nhất:
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-3.5">
                  Quản lý ranh giới giữa việc "được AI hỗ trợ" và "gian lận". Việc phải liên tục tự đánh giá và sửa đổi code của AI (như trong bài DFS/BFS và Linked List C++) đòi hỏi sự tập trung cao độ và tư duy phản biện mạnh mẽ để không bị rơi vào bẫy "lười suy nghĩ".
                </p>
              </div>
              <div className="group/inner hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors">
                <h3 className="text-[#E1E0CC] font-medium mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  Điểm tâm đắc nhất:
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-3.5">
                  Sản phẩm Infographic "Hành trình Carbon". Đó là lần đầu tiên tôi kết hợp trơn tru 3 công cụ AI khác nhau và cảm nhận rõ sức mạnh của công nghệ khi nó đóng vai trò khuyếch đại sức sáng tạo của con người.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
