
interface NomalformProps {
  text: string;
}

const Nomalform = ({ text }: NomalformProps) => {
  return (
    <div>
      <p>{text}</p>
      <textarea></textarea>
    </div>
  );
};

export default Nomalform;
