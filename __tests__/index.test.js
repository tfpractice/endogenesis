import 'jasmine-expect';
import { polygon, } from 'src/polygon';
describe('polygon', () => {
  it('is the string polygon', () => {
    expect(polygon).toEqual('polygon');
  });
});
