import React from 'react';
import Content from '~/components/UI/AdminLTE/Content';

import CustomersNew from '~/components/Customers/New';

const CustomersNewBusinessPage = () => {
  return (
    <Content
      title="New Customer - Business"
      titleButton="New Customer - Business"
    >
      <CustomersNew />
    </Content>
  );
};

// const CustomersNewBusinessPage = () => {
//   return (
//     <Content
//       title="New Customer - Business"
//       titleButton="New Customer - Business"
//     >
//       <form>
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Basic Information</h3>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="name">Business Name</label>

//                       <input className="form-control" name="name" type="text" />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="account_status">Account Status</label>

//                       <select className="form-control" name="account_status">
//                         <option value="potential">Potential</option>
//                         <option value="pending">Pending</option>
//                         <option value="active">Active</option>
//                         <option value="inactive">Inactive</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-sm-12">
//                     <div className="form-group">
//                       <label htmlFor="description">Description</label>

//                       <textarea
//                         className="form-control"
//                         name="description"
//                         rows={3}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-sm-12">
//                     <h5>Contact Information</h5>
//                     <div className="form-group">
//                       <small class="form-text mb-3 text-muted">
//                         These details should be general contact information for
//                         the business itself that we can display publicly for our
//                         customers. For any individual person working at this
//                         business, please create a contact.
//                       </small>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="website">Website</label>
//                       <input
//                         className="form-control"
//                         name="website"
//                         type="url"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="phone_number">Phone Number</label>
//                       <input
//                         className="form-control"
//                         name="phone_number"
//                         type="tel"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="email">Email Address</label>
//                       <input
//                         className="form-control"
//                         name="email"
//                         type="email"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="facebook_username">
//                         Facebook Username
//                       </label>
//                       <input
//                         className="form-control"
//                         name="facebook_username"
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label htmlFor="instagram_username">
//                         Instagram Username
//                       </label>
//                       <input
//                         className="form-control"
//                         name="instagram_username"
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Primary Contact</h3>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-sm-12">
//                     <div className="form-group">
//                       <small class="form-text mb-3 text-muted">
//                         Whoever we are primarily dealing with, generally an
//                         owner or a manager. Other contacts (like accountants and
//                         staff) can be added later.
//                       </small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="card-header">
//                 <h3 className="card-title">Locations</h3>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-sm-12">
//                     <div className="form-group">

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <button className="btn btn-primary btn-submit" type="submit">Submit</button>
//       </form>
//     </Content>
//   );
// };

export default CustomersNewBusinessPage;
