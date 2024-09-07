import EditTopicForm from "@/app/component/EditTopicForm";

const getTopicById = async(id) =>{
    const apiUrl2 = process.env.API_URL;
    try {
        const res = await fetch(`${apiUrl2}/api/topics/${id}`, {cache: "no-store"});

        if(!res.ok){
            throw new Error("Failed to featching for update")
        }
        return res.json();
    } catch (error) {
        console.log("error", error)
    }
}

export default async function EditTopic({params}) {
    const {topicId} = params;
 const topicData =  await getTopicById(topicId);
    return(
        <div>
            <EditTopicForm topicData={topicData} topicId={topicId}/>
        </div>
    );
}