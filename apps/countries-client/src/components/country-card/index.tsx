
interface ICardProps {
    name: string;
    flag: string;
    region: string
}
export default function CountryCard(props: ICardProps) {
    return <div style={{ width: "300px", margin: "20px", display: "inline-block" }}>
        <h2> {props.name} </h2>
        <div>
            <img height={200} width={200} src={props.flag} />
        </div>
        <div>
            <span> {props.region} </span>
        </div>
    </div>
}