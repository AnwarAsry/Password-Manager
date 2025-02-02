import { ClipLoader } from "react-spinners"


interface SpinnerProps {
    loading: boolean
}

export const Spinner = ({ loading }: SpinnerProps) => {
    return <>
        <ClipLoader
            color="#c4c4c4"
            cssOverride={{
                borderWidth: "4px",
            }}
            loading={loading}
            size={32}
            speedMultiplier={0.8}
        />
    </>
}