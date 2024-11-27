import React from 'react'

function Breadcrump(props) {
  return (
    <div>
      {/* <!-- breadcrumb --> */}
	<div className="container">
		<div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
			<a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
				{props.title}
				<i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
			</a>

			<span className="stext-109 cl4">
				{props.page}
			</span>
		</div>
	</div>
    </div>
  )
}

export default Breadcrump
