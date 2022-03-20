import React from 'react';



const index = () => {
  return (<div className="container mx-auto">
    <div className=''>
      <div className="bg-base-200 p-2 mt-8 my-8 max-w-2xl mx-auto rounded-box md:max-w ">
        <div className="text-center">
          <h2 className="mt-4 ">ลืมรหัสผ่าน</h2>
          <hr className="mt-6"></hr>
        </div>

        <div className='flex flex-col-reverse text-center pr-40'>
          <div className='p-8 mt-10'>
            <h3 className='mt-4 mx-auto md:ml-2'>ยืนยันด้วยอีเมล์</h3>
          </div>
        </div>

        <div className='text-center pr-60'>
          <h4 className='fa-regular fa-envelope'>{" "}
            <span className='pr-1' />อีเมล์</h4>
        </div>
        <div className='text-center mb-5'>
          <input type="text" placeholder="อีเมล์" class="input input-bordered w-full max-w-xs" />
        </div>

        <h4 className='text-center pr-32 mb-24 '>จะส่งลิงค์ยืนยันไปทางอีเมล์</h4>


        <hr className="border-white border-solid border text-center"></hr>


        <div class="justify-end card-actions pr-10">
          <button class="btn btn-accent m-5 w-36">บันทึก</button>
        </div>



      </div>


    </div>


  </div>
  )
}

export default index