import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const Delivery = () => {
  return (
    <div className="w-full px-4 my-8">
      <div className="w-full max-w-[1320px] mx-auto shadow-md p-6 sm:p-7 rounded-2xl bg-white">
        {/* Responsive Grid: 1 cột trên Mobile -> 2 cột trên Tablet -> 4 cột trên Laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <div className="delivery_wrapper">
            <div className="flex items-center justify-start sm:justify-center gap-4">
              <p className="shrink-0">
                <Percent
                  size="3rem"
                  color="#1D3B29"
                  className="bg-[#C5FF31] p-2 rounded-xl"
                />
              </p>
              <div>
                <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">
                  Giảm Giá
                </h4>
                <p className="text-sm text-[#9a9caa] font-inter font-normal">
                  Ưu đãi mới mỗi tuần
                </p>
              </div>
            </div>
          </div>

          <div className="delivery_wrapper">
            <div className="flex items-center justify-start sm:justify-center gap-4">
              <p className="shrink-0">
                <Truck
                  size="3rem"
                  color="#1D3B29"
                  className="bg-[#C5FF31] p-2 rounded-xl"
                />
              </p>
              <div>
                <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">
                  Giao Hàng Miễn Phí
                </h4>
                <p className="text-sm text-[#9a9caa] font-inter font-normal">
                  Miễn phí 100% cho mọi đơn hàng
                </p>
              </div>
            </div>
          </div>

          <div className="delivery_wrapper">
            <div className="flex items-center justify-start sm:justify-center gap-4">
              <p className="shrink-0">
                <Clock3
                  size="3rem"
                  color="#1D3B29"
                  className="bg-[#C5FF31] p-2 rounded-xl"
                />
              </p>
              <div>
                <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">
                  Hỗ Trợ 24/7
                </h4>
                <p className="text-sm text-[#9a9caa] font-inter font-normal">
                  Luôn quan tâm đến trải nghiệm của bạn
                </p>
              </div>
            </div>
          </div>

          <div className="delivery_wrapper">
            <div className="flex items-center justify-start sm:justify-center gap-4">
              <p className="shrink-0">
                <ShieldCheck
                  size="3rem"
                  color="#1D3B29"
                  className="bg-[#C5FF31] p-2 rounded-xl"
                />
              </p>
              <div>
                <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">
                  Thanh Toán An Toàn
                </h4>
                <p className="text-sm text-[#9a9caa] font-inter font-normal">
                  Phương thức thanh toán bảo mật 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
