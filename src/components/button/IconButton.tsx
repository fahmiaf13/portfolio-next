interface Props {
  children: React.ReactNode;
}

export default function IconButton(props: Props) {
  const { children } = props;
  return <button className="bg-darker rounded-full p-3 hover:bg-milk hover:border hover:border-darker">{children}</button>;
}
