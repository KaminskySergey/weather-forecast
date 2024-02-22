import { capitalizeFirstLetter } from "@/utils/first-lower-case"
import Title from "../title/title"

interface IHeaderModal {
    title: string
}

export default function HeaderModal({title}: IHeaderModal) {
    return <div className="absolute top-0 left-0 w-full flex items-center border-b-[1px] border-black p-4">
    <Title tag="h3">{capitalizeFirstLetter(title)}</Title>
  </div>
}
