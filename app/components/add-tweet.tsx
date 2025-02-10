import Input from "./input";
import Button from "./button";

export default function AddTweet({
  handleTweetUpload,
  errors,
}: {
  handleTweetUpload: (formData: FormData) => Promise<void>;
  errors: string[] | undefined;
}) {
  return (
    <form
      action={(formData: FormData) => handleTweetUpload(formData)}
      className="flex flex-col gap-4 w-full"
    >
      <Input
        type="text"
        name="tweet"
        placeholder="트윗을 작성해주세요"
        errors={errors}
      />
      <Button text="업로드" />
    </form>
  );
}
