import dateConvertor from "./dateConvertor.js";

function PolicyTable({ policyList }) {
  return (
    <table>
      <tbody>
        <tr className="table-header">
          <th>Policy Name</th>
          <th>Policy Start Date</th>
          <th>Policy Published Date</th>
          <th>Number of Rules</th>
        </tr>
        {policyList.map((policy) => (
          <tr key={policy.policy_id}>
            <th>{policy.name}</th>
            <th>{dateConvertor(policy.start_date)}</th>
            <th>{policy.published_date.slice(0, 10)}</th>
            <th>{policy.rules.length}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PolicyTable;
