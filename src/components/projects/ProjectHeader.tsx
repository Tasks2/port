import SectionHeader from "@/components/ui/SectionHeader";
import { TagList } from "@/components/ui/Tag";

export default function ProjectHeader({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="mb-8">
      <SectionHeader title={title} description={description} className="mb-4" />
      <TagList labels={tags} />
    </div>
  );
}
