class ApiError extends Error
 {
    constructor(
        statusCode,
        massege="something went wrong",
        errors=[],
        statck=""
    ) {
        super(massege) //higher order function use kar rahe hai yaha par 
        // constractor overloading raha hai yaha 
        this.statusCode=statusCode
        this.data=null
        this.success=false
        this.message=massege
          this.errors=errors 

          if (statck) {
            this.statck=statck
          } else {
            Error.captureStackTrace(this,this.constructor)
          }
    }
}