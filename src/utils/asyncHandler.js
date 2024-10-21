
 // two ways------------------->1st way---------------
const asyncHandler =(requestHandler)=>{
    (req,resp,next)=>{
        Promise.resolve(requestHandler(req,resp,next)).
        catch ((err)=>next(err))
    }
}
export {asyncHandler}

// --------------------------------->2nd way----------------------

// const asyncHandler =()=>{}
// const asyncHandler =(func)=>()=>{}
// const asyncHandler =(func)=>async()=>{}

// const asyncHandler =(fn)=>async(req,resp,next){
// try {
//     await fn(req,resp,next)
// } catch (error) {
//     resp.status(err.code ||5000).json({
//         success=false,
//         massage=err.massage
//     })
// }
// }
// export {asyncHandler}