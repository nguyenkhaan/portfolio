import Button from "@/src/shared/components/Button"

const SmallProjectCard = () => 
{
    return (
        <div className="w-[330px] min-h-[210px] border border-border">
            <div className="border-b-white border-b text-gray text-base p-2 h-10">
                HTML, CSS 
            </div>  
            <div className="w-full text-text p-4 text-2xl">
                <h1 className="line-clamp-2">School website School website School website</h1>
                <p className="text-base text-gray my-3">
                    Figma template website for my school
                    Figma template website for my school
                    Figma template website for my school
                    Figma template website for my school
                    Figma template website for my school
                    Figma template website for my school
                </p>
            <Button className="">
                Github 
            </Button>
            </div>
        </div>
    )
}
export default SmallProjectCard