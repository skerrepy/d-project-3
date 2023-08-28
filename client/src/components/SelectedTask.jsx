import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_TASK } from "../graphql/queries";
const SelectedTask = () => {
  let { taskId } = useParams();
  console.log(taskId);
  const { loading, error, data } = useQuery(QUERY_SINGLE_TASK, {
    variables: { taskId },
  });

  return (
    <>
      {loading ? (
        <div>
          <p className="error-text">Loading</p>
        </div>
      ) : null}
      <div id="task-card-wrapper">
        <div id="task-card-meta-wrapper">
          <div>
            <h3>Task name</h3>
            <span>Due date</span>
          </div>

          <button
            style={{
              marginLeft: "auto",
            }}
          >
            Edit Task
          </button>
        </div>
        <textarea contentEditable="false">Task description</textarea>
        <div>
          <div>
            <p>Member name:</p>
            <p>comment text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedTask;
