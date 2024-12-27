import { ITEMS_PER_PAGE } from "@/constants/designSystem";
import { Skeleton, Card } from "antd";

export default function NFTSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8 container mx-auto">
      {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
        <Card key={index} className="p-2 !bg-[#3A3841]/60 ">
          <Skeleton.Node active className="!w-full !h-[200px] !bg-gray-600" />
          <div className="mt-2">
            <Skeleton
              active
              title={{ width: "60%", className: "!bg-gray-600" }}
              paragraph={false}
            />
            <Skeleton
              active
              title={{ width: "40%", className: "!bg-gray-600" }}
              paragraph={false}
              className="mt-2"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Skeleton.Avatar active size="small" className="!bg-gray-600" />
            <div className="flex-1">
              <Skeleton
                active
                title={{ width: "50%", className: "!bg-gray-600" }}
                paragraph={false}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
