import { reduxForm, Field } from "redux-form"
// import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Element } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);


const Textarea = Element("textarea");
const addMessageForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea}
               validate={[required, maxLength50]}
               placeholder='Enter your message' name="newMessageBody" />
         </div>
         <div>
            <button >Send message</button>
         </div>
      </form>
   )
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(addMessageForm)