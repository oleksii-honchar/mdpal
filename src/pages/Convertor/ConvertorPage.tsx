import ChooseFileForm from "./components/ChooseFileForm.tsx";

export default function ConvertorPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <ChooseFileForm />
    </article>
  );
}
