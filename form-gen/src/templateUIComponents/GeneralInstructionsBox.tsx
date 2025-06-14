import React from 'react'

const GeneralInstructionsBox = () => {
	return (
		<div className='text-tiny'>
				<ul className='list-none pl-0'>
					<li>A. Fields marked with '*' are mandatory fields .</li>
					<li>B. Tick wherever applicable .</li>
					<li>C. Please fill the date in DD-MM-YYYY format.</li>
					<li>D. Please fill the Form in English and In BLOCK Letters.</li>
					<li>
						E. Please read section wise detailed guidelines / Instructions
					</li>
					<li>
						F. List of two character ISO 3166 country codes and List of
						State/U.T Code as per Indian Motor Vehicle Act,1988 is available in
						the General Instructions.
					</li>
					<li>
						G. General instructions are available at the Banks website :
						bank.sbi
						{'>>'}Business{'>>'}Current Account
					</li>
					<li>
						H. For particular section update, please tick ( ) in the box
						available before the section number and strike for the sections not
						required to be updated
					</li>
				</ul>
		</div>
	)
}

export default GeneralInstructionsBox
