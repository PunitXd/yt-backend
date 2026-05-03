import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        video : {
           type: Schema.Types.ObjectId,
           ref: "Video",
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true
    }   
)

commentSchema.plugin(mongooseAggregatePaginate); // sarre comments ekdam se nhi de skte user so pages me divide krke denge

export const comment = mongoose.model("Comment", commentSchema)