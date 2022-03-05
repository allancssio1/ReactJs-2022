// declaração da tipagem recebida pelo component.
// ? antes do : significa que a props é opcional de ser mandada pelo componentPai.
type TweetProps = {
  // text?: string
  text: string
}

// props: [a propriedade declarada] é obrigatório por conta do ts.
export function Tweet(props: TweetProps) {
  return <p>{props.text}</p>
}