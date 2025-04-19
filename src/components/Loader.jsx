import BarLoader from "react-spinners/BarLoader";

export default function Loader() {
  return (
<div className="h-screen w-screen flex items-center justify-center">
  <div className="flex flex-col items-center justify-center">
    <div className="sweet-loading">
      <BarLoader 
        color={"rgb(62, 62, 250)"}
        loading={true}
        cssOverride={{}}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  </div>
</div>

  )
}

