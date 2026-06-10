import { WordsPullUp, WordsPullUpMultiStyle } from '../components/framer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen p-4 md:p-6 w-full flex flex-col relative">
        <div className="relative flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden">
          {/* Background Video using a cinematic stock video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 sm:px-10 md:px-16 md:pb-16 flex flex-col md:flex-row items-end gap-10">
            <div className="flex-1 w-full">
              <WordsPullUp 
                text="XUÂN VŨ" 
                className="text-[#E1E0CC] text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[12vw] font-medium leading-[0.85] tracking-[-0.07em]"
                showAsterisk
              />
            </div>
            
            <div className="md:w-1/3 flex flex-col items-start gap-8 z-10">
              <p className="text-primary/80 text-sm sm:text-base leading-tight font-light">
                Tôi là sinh viên ngành Khoa học Dữ liệu (Data Science) tại Đại học Công nghệ (UET) - ĐHQGHN, đam mê khám phá dữ liệu và xây dựng những giải pháp AI có tính ứng dụng cao.
              </p>
              
              <Link to="/projects" className="group flex items-center bg-primary rounded-full pr-1 pl-5 py-1 gap-4 hover:gap-6 transition-all duration-300">
                <span className="text-black font-semibold text-sm">Xem Dự án</span>
                <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-32 px-6">
        <div className="bg-[#101010] rounded-[2rem] max-w-6xl mx-auto p-10 md:p-20 text-center flex flex-col items-center">
          <span className="text-primary text-xs tracking-widest uppercase mb-8">Giới thiệu</span>
          
          <WordsPullUpMultiStyle 
            segments={[
              { text: "Xin chào, tôi là ", className: "font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" },
              { text: "Đồng Xuân Vũ", className: "font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E1E0CC] px-2" },
              { text: "một kỹ sư dữ liệu tương lai.", className: "font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary" }
            ]}
            className="max-w-4xl mx-auto leading-[0.95]"
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#DEDBC8] text-sm md:text-lg lg:text-xl font-light leading-relaxed justify-center text-center"
            >
              Mục tiêu của tôi là áp dụng các kiến thức chuyên sâu về Machine Learning và trí tuệ nhân tạo để giải quyết những bài toán phức tạp trong thực tế. Portfolio này lưu trữ sản phẩm cá nhân để dễ dàng đánh giá tiến trình học tập, chia sẻ kiến thức và định hướng phát triển bản thân một cách chuyên nghiệp và liêm chính.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
