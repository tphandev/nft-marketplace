import Text from "@/components/Text";
import { Button } from "antd";
import { TEXT_STYLES } from "@/constants/designSystem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-red-900">
      <div className="text-center">
        <Text variant="Body/14/Medium" className="mb-4">
          Body/14/Medium
        </Text>
        <Text variant="Caption/12/Medium" className="mb-4">
          Caption/12/Medium
        </Text>
        <Text variant="Header/16/Medium" className="mb-4">
          Header/16/Medium
        </Text>
        <Text variant="Header/16/Semibold" className="mb-4">
          Header/16/Semibold
        </Text>
        <Text variant="Title/14" className="mb-4">
          Title/14
        </Text>
        <Text variant="Title/18/Bold" className="mb-4">
          Title/18/Bold
        </Text>
        <Text variant="Title/20" className="mb-4">
          Title/20
        </Text>
        <p className={`${TEXT_STYLES["Title/20"]}`}>TEXT</p>
        <Button type="primary">Button</Button>
      </div>
    </main>
  );
}
