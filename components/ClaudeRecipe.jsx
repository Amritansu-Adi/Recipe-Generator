import Markdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <Markdown>{props.recipe}</Markdown>
    )
}