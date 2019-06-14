copy_and_paste = <<~NAMES
1	Rotation Part 1	Not completed
2	Rotation Part 2	Not completed
3	Rotation Part 3	Not completed
4	Stack Machine Interpretation	Not completed
5	Word to Digit	Not completed
6	Fibonacci Numbers (Recursion)	Not completed
7	Fibonacci Numbers (Procedural)	Not completed
8	Fibonacci Numbers (Memoization)	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
