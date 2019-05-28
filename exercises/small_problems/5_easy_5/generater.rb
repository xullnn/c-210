copy_and_paste = <<~NAMES
1	Double Char Part 1	Not completed
2	Double Char Part 2	Not completed
3	Reverse Number	Not completed
4	Get the Middle Character	Not completed
5	Always Return Negative	Not completed
6	Counting Up	Not completed
7	Name Swapping	Not completed
8	Sequence Count	Not completed
9	Reverse It Part 1	Not completed
10	Reverse It Part 2	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
