/**
 * Job interface
 */
interface Job {
  id: number;
  lat: number;
  lng: number;
  note: string;
  completion: boolean;
}
export default Job;
