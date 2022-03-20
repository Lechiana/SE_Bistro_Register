import React from 'react'

const index = () => {
  return (<div className="container mx-auto">
    <div className=''>
      <div className="bg-base-200 p-2 mt-8 my-8 max-w-2xl mx-auto rounded-box md:max-w ">
        <div className="text-center mt-4">
          <h2 className="">แก้ไขรหัสผ่าน</h2>
          <hr className="mt-6"></hr>
        </div>

        <div className='flex flex-col-reverse text-center pr-36 p-10 mt-2'>
          <div className='p-1 mt-2'>
            <h3 className='mx-auto md:ml-2'>กรอกรหัสผ่านใหม่</h3>
          </div>
        </div>

        <div className='text-center pr-48'>
          <h4 className='fas fa-unlock-alt'>{" "}
            <span className='pr-2' />รหัสผ่านใหม่</h4>
        </div>
        <div className='text-center mb-5'>
          <input type="text" placeholder="รหัสผ่านใหม่" class="input input-bordered w-full max-w-xs"></input>
        </div>

        <div className='text-center pr-32'>
          <h4 className='fas fa-unlock-alt'>{" "}
            <span className='pr-2' />ยืนยันรหัสใหม่อีกครั้ง</h4>
        </div>
        <div className='text-center mb-5'>
          <i className=''></i>
          <input type="text" placeholder="ยืนยันรหัสใหม่" class="input input-bordered w-full max-w-xs"></input>
        </div>




        <hr className="border-white border-solid border text-center mt-24"></hr>


        <div class="justify-end card-actions pr-10">
          <button class="btn btn-accent m-5 w-36">บันทึก</button>
        </div>

      </div>


    </div>


  </div>
  )
}

export default index