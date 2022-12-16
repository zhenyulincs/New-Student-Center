class base_controller {
    is_contain_null(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "" || arr[i] == null) {

                return true
            }
        }
        return false
    }
    onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
      }
}
module.exports = base_controller